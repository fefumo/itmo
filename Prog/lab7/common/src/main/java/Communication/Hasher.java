package Communication;

import java.math.BigInteger;
import java.nio.charset.StandardCharsets;
import java.security.MessageDigest;
import java.security.NoSuchAlgorithmException;
import java.security.SecureRandom;
import java.util.Base64;

public class Hasher {
    public static String generateSalt() {
        SecureRandom random = new SecureRandom();
        byte[] salt = new byte[16];
        random.nextBytes(salt);
        return Base64.getEncoder().encodeToString(salt);
    }
    public static String encryptPswdMD2(String password, String salt){
        try {
            MessageDigest md = MessageDigest.getInstance("MD2");
            String combined = password + salt;
            byte[] digest = md.digest(combined.getBytes(StandardCharsets.UTF_8));
            BigInteger intRepresentation = new BigInteger(1, digest);
            String hashedPswd = intRepresentation.toString(16);
            while(hashedPswd.length() < 32){
                hashedPswd = "0" + hashedPswd;
            }
            return hashedPswd;
        } catch (NoSuchAlgorithmException e) {
            System.out.println(e.getMessage());
        }
        return null;
    }
}
