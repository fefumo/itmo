import pandas as pd
import numpy as np
import matplotlib.pylab as plt


class TreeNode:
    def __init__(self, feature_index=None, children=None, prediction=None, pos_prob=None):
        """
        feature_index: индекс признака в X (0..k-1), по которому мы делаем разбиение
        children: dict {значение признака -> дочерний узел}
        prediction: метка класса (0/1) для листа
        pos_prob: вероятность положительного класса в этом узле (TP/(TP+FN))
        """
        self.feature_index = feature_index
        self.children = children if children is not None else {}
        self.prediction = prediction
        self.pos_prob = pos_prob  # доля единиц в этом узле

    def is_leaf(self):
        return self.feature_index is None


class DecisionTreeClassifierMulti:
    def __init__(self, max_depth=None, min_samples_split=2):
        """
        max_depth: максимальная глубина дерева (чтобы не переобучиться)
        min_samples_split: минимальное число объектов в узле, чтобы пытаться его делить
        """
        self.max_depth = max_depth
        self.min_samples_split = min_samples_split
        self.root: TreeNode | None = None

    def fit(self, X, y):
        """
        Обучение дерева.
        X — numpy-массив (N, k)
        y — numpy-массив (N,)
        """
        n_samples, n_features = X.shape
        feature_indices = np.arange(n_features)  # индексы признаков 0..k-1
        self.root = self._build_tree(X, y, feature_indices, depth=0)

    def _entropy(self, y):
        """Считаем энтропию H(y)"""
        if len(y) == 0:
            return 0.0
        _, counts = np.unique(y, return_counts=True)
        probs = counts / len(y)
        # игнорируем p=0, чтобы не было логарифма нуля
        return -np.sum([p * np.log2(p) for p in probs if p > 0])

    def _build_tree(self, X, y, feature_indices, depth):
        """
        Рекурсивно строим дерево.
        X, y — данные в текущем узле
        feature_indices — какие признаки ещё можно использовать
        depth — текущая глубина

        build(S):
            если S однородное или маленькое:
                вернуть лист с меткой класса
            иначе:
                выбрать лучший признак f
                для каждого значения v:
                    S_v = объекты, где f = v
                    child_v = build(S_v)
                вернуть узел с признаком f и детьми {v: child_v}
        """
        num_samples = len(y)
        num_pos = np.sum(y == 1)
        num_neg = num_samples - num_pos

        # вероятность положительного класса в этом узле
        pos_prob = num_pos / num_samples if num_samples > 0 else 0.0

        # Базовый прогноз (м majority class)
        majority_class = 1 if num_pos >= num_neg else 0

        # --- критерии остановки ---
        # 1) все объекты одного класса
        if num_pos == 0 or num_neg == 0:
            return TreeNode(feature_index=None, prediction=majority_class, pos_prob=pos_prob)

        # 2) нет признаков, которыми можно делить
        if len(feature_indices) == 0:
            return TreeNode(feature_index=None, prediction=majority_class, pos_prob=pos_prob)

        # 3) достигли максимальной глубины
        if (self.max_depth is not None) and (depth >= self.max_depth):
            return TreeNode(feature_index=None, prediction=majority_class, pos_prob=pos_prob)

        # 4) мало объектов, дальнейшее деление бессмысленно
        if num_samples < self.min_samples_split:
            return TreeNode(feature_index=None, prediction=majority_class, pos_prob=pos_prob)

        # --- выбираем лучший признак по информационному выигрышу ---
        current_entropy = self._entropy(y)
        best_gain = 0.0
        best_feature = None

        for feature in feature_indices:
            values = np.unique(X[:, feature])  # возможные значения признака
            if len(values) <= 1:
                continue  # нечего делить

            cond_entropy = 0.0
            for v in values:
                mask = X[:, feature] == v
                y_v = y[mask]
                if len(y_v) == 0:
                    continue
                p = len(y_v) / num_samples
                cond_entropy += p * self._entropy(y_v)

            info_gain = current_entropy - cond_entropy

            if info_gain > best_gain:
                best_gain = info_gain
                best_feature = feature

        # Если признак не найден или выигрыш нулевой — делить дальше нет смысла
        if (best_feature is None) or (best_gain <= 0.0):
            return TreeNode(feature_index=None, prediction=majority_class, pos_prob=pos_prob)

        # --- строим дочерние узлы ---
        children = {}
        remaining_features = feature_indices[feature_indices != best_feature]
        values = np.unique(X[:, best_feature])

        for v in values:
            mask = X[:, best_feature] == v
            X_v = X[mask]
            y_v = y[mask]

            if len(y_v) == 0:
                # На всякий случай: если вдруг нет объектов с этим значением —
                # делаем лист с мажоритарным классом родителя
                child_node = TreeNode(feature_index=None, prediction=majority_class, pos_prob=pos_prob)
            else:
                child_node = self._build_tree(X_v, y_v, remaining_features, depth + 1)

            children[v] = child_node

        # Возвращаем внутренний узел
        return TreeNode(feature_index=best_feature, children=children, prediction=None, pos_prob=pos_prob)

    def _predict_one(self, x):
        """Предсказание класса (0/1) для одного объекта"""

        if self.root is None:
            raise RuntimeError("Decision tree is not fitted yet")

        node = self.root
        while not node.is_leaf():
            feature_value = x[node.feature_index]
            if feature_value in node.children:
                node = node.children[feature_value]
            else:
                # Значение, которого не было в обучении.
                # Падаем в majority этого узла (по pos_prob).
                return 1 if (node.pos_prob is not None and node.pos_prob >= 0.5) else 0
        return node.prediction

    def _predict_proba_one(self, x):
        """Предсказание вероятности класса 1 для одного объекта"""

        if self.root is None:
            raise RuntimeError("Decision tree is not fitted yet")

        node = self.root
        while not node.is_leaf():
            feature_value = x[node.feature_index]
            if feature_value in node.children:
                node = node.children[feature_value]
            else:
                break  # не видели такое значение: остаёмся в текущем узле

        # pos_prob узла — оценка вероятности класса 1
        if node.pos_prob is not None:
            return node.pos_prob
        else:
            return 0.5  # если совсем ничего не знаем

    def predict(self, X):
        """Предсказание класса для всех объектов"""
        return np.array([self._predict_one(x) for x in X])

    def predict_proba(self, X):
        """Предсказание вероятности класса 1 для всех объектов"""
        return np.array([self._predict_proba_one(x) for x in X])


def pr_curve(y_true, y_scores):
    """
    Строим PR-кривую.
    Возвращает массивы Recall, Precision.
    """
    desc_indices = np.argsort(-y_scores)
    y_true_sorted = y_true[desc_indices]

    P = np.sum(y_true_sorted == 1)

    TP = 0
    FP = 0

    precisions = []
    recalls = []

    for i in range(len(y_true_sorted)):
        if y_true_sorted[i] == 1:
            TP += 1
        else:
            FP += 1

        recall = TP / P if P > 0 else 0.0
        precision = TP / (TP + FP) if (TP + FP) > 0 else 0.0

        recalls.append(recall)
        precisions.append(precision)

    return np.array(recalls), np.array(precisions)


def main() -> None:
    df = pd.read_csv("data.csv")
    print(df.head())
    print(min(df["GRADE"]))
    print(max(df["GRADE"]))
    # min 0 max 7

    success_threshold = 4
    df["SUCCESS"] = (df["GRADE"] >= success_threshold).astype(int)
    print(df[["STUDENT ID", "COURSE ID", "GRADE", "SUCCESS"]].head())

    feature_cols = [col for col in df.columns if col not in ["STUDENT ID", "COURSE ID", "GRADE", "SUCCESS"]]
    n_features = len(feature_cols)
    k = int(np.sqrt(n_features))

    np.random.seed(20)
    selected_features = np.random.choice(feature_cols, size=k, replace=False)
    print("Всего признаков:", n_features)
    print("Выбрали признаков:", k)
    print("Список выбранных признаков:", selected_features)
    X = df[selected_features].values  # numpy-массив формы (N, k)
    y = df["SUCCESS"].values  # numpy-массив формы (N,)

    N = len(X)
    indices = np.arange(N)
    np.random.shuffle(indices)

    train_size = int(0.8 * N)
    train_idx = indices[:train_size]
    test_idx = indices[train_size:]

    X_train, y_train = X[train_idx], y[train_idx]
    X_test, y_test = X[test_idx], y[test_idx]

    print("Train size:", len(X_train), "Test size:", len(X_test))

    # --- Обучение дерева ---
    tree = DecisionTreeClassifierMulti(max_depth=5, min_samples_split=5)
    tree.fit(X_train, y_train)

    # --- Предсказания на тесте ---
    y_pred = tree.predict(X_test)
    y_proba = tree.predict_proba(X_test)  # для ROC/PR

    acc = accuracy_score(y_test, y_pred)
    prec = precision_score(y_test, y_pred)
    rec = recall_score(y_test, y_pred)

    print(f"Accuracy:  {acc:.4f}")
    print(f"Precision: {prec:.4f}")
    print(f"Recall:    {rec:.4f}")

    fpr, tpr = roc_curve(y_test, y_proba)
    auc_roc = auc_trapezoid(fpr, tpr)

    recall_curve, precision_curve = pr_curve(y_test, y_proba)
    auc_pr = auc_trapezoid(recall_curve, precision_curve)

    plt.figure()
    plt.plot(fpr, tpr, label=f"ROC (AUC = {auc_roc:.3f})")
    plt.plot([0, 1], [0, 1], linestyle="--", label="случайный классификатор")
    plt.xlabel("FPR (False Positive Rate)")
    plt.ylabel("TPR (True Positive Rate)")
    plt.title("ROC-кривая")
    plt.legend()
    plt.grid(True)
    plt.show()

    # --- PR-кривая ---
    plt.figure()
    plt.plot(recall_curve, precision_curve, label=f"PR (AUC = {auc_pr:.3f})")
    plt.xlabel("Recall")
    plt.ylabel("Precision")
    plt.title("Precision–Recall кривая")
    plt.legend()
    plt.grid(True)
    plt.show()


def confusion_matrix_binary(y_true, y_pred):
    """
    Возвращает TP, FP, TN, FN
    """
    TP = np.sum((y_true == 1) & (y_pred == 1))
    FP = np.sum((y_true == 0) & (y_pred == 1))
    TN = np.sum((y_true == 0) & (y_pred == 0))
    FN = np.sum((y_true == 1) & (y_pred == 0))
    return TP, FP, TN, FN


def accuracy_score(y_true, y_pred):
    """насколько часто дерево угадывает класс SUCCESS"""
    TP, FP, TN, FN = confusion_matrix_binary(y_true, y_pred)
    total = TP + FP + TN + FN
    return (TP + TN) / total if total > 0 else 0.0


def precision_score(y_true, y_pred):
    """из всех предсказанных «успешных» сколько реально успешны"""
    TP, FP, TN, FN = confusion_matrix_binary(y_true, y_pred)
    denom = TP + FP
    return TP / denom if denom > 0 else 0.0


def recall_score(y_true, y_pred):
    """из всех реально успешных сколько дерево нашло"""
    TP, FP, TN, FN = confusion_matrix_binary(y_true, y_pred)
    denom = TP + FN
    return TP / denom if denom > 0 else 0.0


def roc_curve(y_true, y_scores):
    """
    Строим ROC-кривую.
    Возвращает массивы FPR, TPR.
    """
    # сортируем по убыванию score
    desc_indices = np.argsort(-y_scores)
    y_true_sorted = y_true[desc_indices]
    y_scores_sorted = y_scores[desc_indices]

    P = np.sum(y_true_sorted == 1)  # общее число позитивных
    N = np.sum(y_true_sorted == 0)  # общее число негативных

    TPR = [0.0]
    FPR = [0.0]

    TP = 0
    FP = 0

    for i in range(len(y_true_sorted)):
        if y_true_sorted[i] == 1:
            TP += 1
        else:
            FP += 1

        TPR.append(TP / P if P > 0 else 0.0)
        FPR.append(FP / N if N > 0 else 0.0)

    return np.array(FPR), np.array(TPR)


def auc_trapezoid(x, y):
    """
    Площадь под кривой методом трапеций.
    x и y — массивы одинаковой длины.
    """
    # np.trapz реализует метод трапеций
    return np.trapezoid(y, x)


if __name__ == "__main__":
    main()
