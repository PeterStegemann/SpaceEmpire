package net.stegemann;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;
import java.util.Map;

@RestController
@CrossOrigin( origins = "http://localhost:4200")
public class Controller
{
  @GetMapping( "/api/data")
  public Map< String, String> getData()
  {
    return Map.of( "message", "Hallo aus dem Spring Boot Backend!");
  }
}
