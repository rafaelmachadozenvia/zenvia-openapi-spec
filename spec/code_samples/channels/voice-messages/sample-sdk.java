import com.zenvia.api.sdk.client.Channel;
import com.zenvia.api.sdk.client.apache.Client;
import com.zenvia.api.sdk.contents.TextContent;
import com.zenvia.api.sdk.messages.Message;

public class VoiceSendTextMessage {

  public static void main (String arg []) {
    Client client = new Client("YOUR_API_TOKEN");

    Channel voice = client.getChannel("voice");

    TextContent content = new TextContent("Some text message");

    try {
      Message response = voice.sendMessage("sender-identifier", "recipient-identifier", content);
      System.out.println("Response: " + response.toString());
    } catch(Exception e) {
      System.out.println("Error: " + e.getMessage());
    }
  }

}
