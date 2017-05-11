package sparkexample;

import static spark.Spark.*;

public class Test {

    public static void main(String[] args) {
        setPort(80);

        post("/testAPI", (request, response) -> {
            System.out.println("Dans la fonction testAPI");
            return "Test OK";
        });
    }
}
