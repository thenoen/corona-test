package sk.thenoen.coronatest.coronatest.resource;

import org.springframework.web.bind.annotation.*;
import org.springframework.web.client.RestTemplate;
import sk.thenoen.coronatest.coronatest.DataService;

import java.time.LocalDateTime;


@RestController
@RequestMapping("/data")
public class DataResource {

  private final DataService dataService;

  public DataResource(DataService dataService) {
    this.dataService = dataService;

  }

  @GetMapping("/driveins")
  public String getDriveins() {
    return dataService.getDriveins();
  }

  @GetMapping("/drivein-times")
  public String getDriveinTimes(@RequestParam("id") String id) {
    return dataService.getDriveinTimes(id);
  }

  @GetMapping("/worker-test")
  public String getWorkerTest() {
    return LocalDateTime.now().toString();
  }

}
