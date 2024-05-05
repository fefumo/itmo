package Communication;

import java.io.Serializable;
import java.util.Arrays;

public class Response implements Serializable  {
    private byte[] responseData;

    public Response(byte[] responseData){
        this.responseData = responseData;
    }
    public Response(){
        
    }
    public byte[] getResponseData() {
        return responseData;
    }
    public void setResponseData(byte[] responseData) {
        this.responseData = responseData;
    }
    @Override
    public String toString() {
        return "Response [responseData=" + Arrays.toString(responseData) + "]";
    }
        
    
}
