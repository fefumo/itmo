#!/usr/bin/env python3
# -*- coding: utf-8 -*-
from __future__ import annotations
import argparse
from dataclasses import dataclass, field
from typing import Dict, Set, List, Tuple

# -------------------- Database (hardcoded) --------------------
GAMES: Set[str] = {
    "disco_elysium",
    "rimworld",
    "witcher3",
    "cyberpunk2077",
    "portal2",
    "dota2",
    "cs2",
    "silksong",
    "hollow_knight",
    "elden_ring",
    "dark_souls3",
    "fortnite",
    "league_of_legends",
    "pubg",
    "minecraft",
    "overwatch",
    "wow",
    "hotline_miami",
    "satisfactory",
    "factorio",
    "hades",
}

GENRES: Set[str] = {
    "rpg",
    "moba",
    "soulslike",
    "shooter",
    "platformer",
    "puzzle",
    "simulation",
    "survival",
    "adventure",
    "roguelike",
    "mmorpg",
    "action",
}

MECHANICS: Set[str] = {
    "crafting",
    "stealth",
    "coop",
    "pvp",
    "loot",
    "building",
    "farming",
    "permadeath",
}

DEVELOPERS: Set[str] = {
    "cdpr",
    "valve",
    "team_cherry",
    "fromsoftware",
    "epic_games",
    "riot_games",
    "pubg_studios",
    "mojang_studios",
    "blizzard_entertainment",
    "dennaton_games",
    "coffee_stain",
    "wube_software",
    "supergiant",
    "zaum",
    "ludeon_studios",
    "wube",
}

DEVELOPED_BY: Dict[str, str] = {
    "witcher3": "cdpr",
    "cyberpunk2077": "cdpr",
    "portal2": "valve",
    "dota2": "valve",
    "cs2": "valve",
    "silksong": "team_cherry",
    "hollow_knight": "team_cherry",
    "elden_ring": "fromsoftware",
    "dark_souls3": "fromsoftware",
    "fortnite": "epic_games",
    "league_of_legends": "riot_games",
    "pubg": "pubg_studios",
    "minecraft": "mojang_studios",
    "overwatch": "blizzard_entertainment",
    "wow": "blizzard_entertainment",
    "hotline_miami": "dennaton_games",
    "satisfactory": "coffee_stain",
    "factorio": "wube_software",
    "hades": "supergiant",
    "disco_elysium": "zaum",
    "rimworld": "ludeon_studios",
}

INDIE_STUDIO: Set[str] = {
    "zaum",
    "ludeon_studios",
    "wube_software",
    "dennaton_games",
    "team_cherry",
    "mojang_studios",
    "wube",
    "coffee_stain",
}

HAS_GENRE: Dict[str, Set[str]] = {
    "witcher3": {"rpg", "action"},
    "cyberpunk2077": {"rpg", "action"},
    "portal2": {"puzzle"},
    "dota2": {"moba"},
    "cs2": {"shooter"},
    "silksong": {"platformer"},
    "hollow_knight": {"platformer"},
    "elden_ring": {"rpg", "action"},
    "dark_souls3": {"rpg", "action", "soulslike"},
    "fortnite": {"shooter"},
    "league_of_legends": {"moba"},
    "pubg": {"shooter"},
    "minecraft": {"survival", "adventure"},
    "overwatch": {"shooter"},
    "wow": {"mmorpg"},
    "hotline_miami": {"action", "shooter"},
    "satisfactory": {"simulation"},
    "factorio": {"simulation"},
    "rimworld": {"simulation"},
    "hades": {"roguelike"},
    "disco_elysium": {"rpg"},
}

FEATURES_MECH: Dict[str, Set[str]] = {
    "minecraft": {"crafting", "building", "farming", "loot", "pvp"},
    "dota2": {"farming", "pvp"},
    "portal2": {"coop"},
    "fortnite": {"pvp", "building"},
    "league_of_legends": {"pvp", "farming"},
    "cs2": {"pvp"},
    "overwatch": {"pvp"},
    "pubg": {"pvp", "loot"},
    "hades": {"loot", "permadeath"},
    "satisfactory": {"crafting", "building"},
    "factorio": {"crafting", "building"},
    "rimworld": {"farming", "crafting", "building"},
}


# helpers to access safely
def game_genres(game: str) -> Set[str]:
    return HAS_GENRE.get(game, set())


def game_mechs(game: str) -> Set[str]:
    return FEATURES_MECH.get(game, set())


def game_developer(game: str) -> str | None:
    return DEVELOPED_BY.get(game)


# -------------------- Rules (Python equivalents) --------------------
def indie_game(game: str) -> bool:
    studio = game_developer(game)
    return bool(studio and studio in INDIE_STUDIO)


def hardcore(game: str) -> bool:
    g = game_genres(game)
    m = game_mechs(game)
    return ("soulslike" in g) or ("permadeath" in m)


def action_rpg(game: str) -> bool:
    g = game_genres(game)
    return ("rpg" in g) and ("action" in g)


def studio_specializes(studio: str) -> Set[str]:
    """Genres a studio 'specializes' in: any genre seen among its games."""
    genres: Set[str] = set()
    for game, st in DEVELOPED_BY.items():
        if st == studio:
            genres |= game_genres(game)
    return genres


def studio_specializes_in_mechanic(studio: str) -> Set[str]:
    mechs: Set[str] = set()
    for game, st in DEVELOPED_BY.items():
        if st == studio:
            mechs |= game_mechs(game)
    return mechs


def casual_game(game: str) -> bool:
    g = game_genres(game)
    m = game_mechs(game)
    return (
        (("adventure" in g) or ("puzzle" in g) or ("platformer" in g))
        and ("pvp" not in m)
        and ("permadeath" not in m)
    )


# -------------------- User dialog & scoring --------------------
GENRE_ALIASES: Dict[str, str] = {
    "rpg": "rpg",
    "ммо": "mmorpg",
    "mmorpg": "mmorpg",
    "soulslike": "soulslike",
    "соулслайк": "soulslike",
    "action": "action",
    "экшен": "action",
    "moba": "moba",
    "шутер": "shooter",
    "shooter": "shooter",
    "platformer": "platformer",
    "платформер": "platformer",
    "puzzle": "puzzle",
    "головоломка": "puzzle",
    "simulation": "simulation",
    "симулятор": "simulation",
    "survival": "survival",
    "выживание": "survival",
    "adventure": "adventure",
    "приключения": "adventure",
    "roguelike": "roguelike",
    "рогалик": "roguelike",
}
MECH_ALIASES: Dict[str, str] = {
    "crafting": "crafting",
    "крафт": "crafting",
    "stealth": "stealth",
    "стелс": "stealth",
    "coop": "coop",
    "co-op": "coop",
    "кооп": "coop",
    "кооператив": "coop",
    "pvp": "pvp",
    "пвп": "pvp",
    "loot": "loot",
    "лут": "loot",
    "building": "building",
    "строительство": "building",
    "farming": "farming",
    "фермерство": "farming",
    "permadeath": "permadeath",
    "перманентная смерть": "permadeath",
}

YES = {"y", "yes", "да", "д", "true", "t", "1"}


@dataclass
class Prefs:
    age: int
    genres: Set[str] = field(default_factory=set)
    mechs: Set[str] = field(default_factory=set)
    want_pvp: bool = False
    want_coop: bool = False
    prefer_indie: bool = False
    dislike_hardcore: bool = False


def parse_list(s: str) -> List[str]:
    return [x.strip().lower() for x in s.replace(";", ",").split(",") if x.strip()]


def map_aliases(items: List[str], mapping: Dict[str, str]) -> Set[str]:
    out: Set[str] = set()
    for it in items:
        key = it.lower().strip()
        if key in mapping:
            out.add(mapping[key])
        elif key.isidentifier():
            out.add(key)
    return out


def ask_bool(prompt: str) -> bool:
    return input(prompt).strip().lower() in YES


def dialog() -> Prefs:
    print("=== Предпочтения ===")
    while True:
        try:
            age = int(input("Сколько вам лет? (целое): ").strip())
            break
        except Exception:
            print("Введите целое число, например 18.")
    genres = map_aliases(
        parse_list(input("Жанры (RPG, shooter, roguelike, mmorpg, soulsilike ... ")),
        GENRE_ALIASES,
    )
    mechs = map_aliases(
        parse_list(input("Механики (crafting, pvp, coop, stealth, farming, loot ... ")),
        MECH_ALIASES,
    )
    prefer_indie = ask_bool("Предпочитаете инди? (y/n): ")
    want_pvp = ask_bool("Хотите PvP? (y/n): ")
    want_coop = ask_bool("Нужен кооператив? (y/n): ")
    dislike_hardcore = ask_bool("Не любите хардкор (soulslike/permadeath)? (y/n): ")
    return Prefs(
        age, genres, mechs, want_pvp, want_coop, prefer_indie, dislike_hardcore
    )


def score_game(game: str, prefs: Prefs) -> Tuple[float, List[str]]:
    score = 0.0
    reasons: List[str] = []
    ggenres = game_genres(game)
    gmechs = game_mechs(game)

    inter_g = ggenres.intersection(prefs.genres)
    if inter_g:
        add = 2.0 * len(inter_g)
        score += add
        reasons.append(f"жанры: {', '.join(sorted(inter_g))} (+{add:.1f})")

    inter_m = gmechs.intersection(prefs.mechs)
    if inter_m:
        add = 1.5 * len(inter_m)
        score += add
        reasons.append(f"механики: {', '.join(sorted(inter_m))} (+{add:.1f})")

    if prefs.want_pvp and ("pvp" in gmechs):
        score += 1.0
        reasons.append("поддерживает PvP (+1.0)")
    if prefs.want_coop and ("coop" in gmechs):
        score += 1.0
        reasons.append("есть кооператив (+1.0)")

    if prefs.prefer_indie and indie_game(game):
        score += 1.25
        reasons.append("инди-игра (+1.25)")

    if prefs.age < 16 and ("shooter" in ggenres):
        score -= 1.0
        reasons.append("возможна жестокость (шутер) (-1.0)")
    if prefs.dislike_hardcore and hardcore(game):
        score -= 1.0
        reasons.append("хардкор (soulslike/permadeath) (-1.0)")

    if prefs.age <= 13 and casual_game(game):
        score += 0.5
        reasons.append("казуальная игра (подходит младшим) (+0.5)")

    score += 0.1
    return score, reasons


def format_table(
    rows: List[Tuple],
    headers: Tuple[str, ...],
    numeric_cols: set[int] | None = None,
) -> str:
    """
    Форматирует таблицу моноширинно.
    numeric_cols — индексы колонок, которые нужно форматировать как числа с 2 знаками.
    Для остальных колонок — обычная строка.
    """
    if numeric_cols is None:
        numeric_cols = set()

    # format cells
    formatted_rows: List[Tuple[str, ...]] = []
    for row in rows:
        out: List[str] = []
        for i, val in enumerate(row):
            if i in numeric_cols and isinstance(val, (int, float)):
                out.append(f"{val:.2f}")
            else:
                out.append(str(val))
        formatted_rows.append(tuple(out))

    # calc widths
    cols = list(zip(*([headers] + formatted_rows)))
    widths = [max(len(str(cell)) for cell in col) for col in cols]

    def fmt_row(cells: Tuple[str, ...]) -> str:
        return " | ".join(str(c).ljust(w) for c, w in zip(cells, widths))

    sep = "-+-".join("-" * w for w in widths)
    out_lines = [fmt_row(headers), sep]
    for row in formatted_rows:
        out_lines.append(fmt_row(row))
    return "\n".join(out_lines)


def main():
    ap = argparse.ArgumentParser(description="Simple Games Recommender")
    ap.add_argument("-k", "--topk", type=int, default=5, help="Сколько игр показать")
    args = ap.parse_args()

    prefs = dialog()
    scored: List[Tuple[str, float, List[str]]] = []
    for g in sorted(GAMES):
        s, rs = score_game(g, prefs)
        scored.append((g, s, rs))
    scored.sort(key=lambda x: x[1], reverse=True)
    top = scored[: args.topk]

    rows = [(name, score, " ; ".join(rs)) for name, score, rs in top]
    print("\n=== Рекомендации ===")
    print(format_table(rows, headers=("Игра", "Счёт", "Объяснение"), numeric_cols={1}))

    # studios specialized in user's tastes
    studios: Set[str] = set(DEVELOPERS)
    show = []
    for st in sorted(studios):
        gspec = studio_specializes(st).intersection(prefs.genres)
        mspec = studio_specializes_in_mechanic(st).intersection(prefs.mechs)
        if gspec or mspec:
            show.append(
                (st, ", ".join(sorted(gspec)) or "-", ", ".join(sorted(mspec)) or "-")
            )
    if show:
        print("\n=== Студии под ваши вкусы ===")
        print(
            format_table(
                show, headers=("Студия", "Жанры", "Механики"), numeric_cols=set()
            )
        )


if __name__ == "__main__":
    main()
