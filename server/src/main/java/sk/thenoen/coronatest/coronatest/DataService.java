package sk.thenoen.coronatest.coronatest;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.HttpEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

@Service
public class DataService {

  private static Logger logger = LoggerFactory.getLogger(DataService.class);

  private static final String baseUrl = "https://mojeezdravie.nczisk.sk/api/v1/web/";
  private final RestTemplate template;

  public DataService() {

    template = new RestTemplate();

  }

  public String getDriveins() {
    return template.getForObject(baseUrl + "get_driveins", String.class);
  }

  public String getDriveinTimes(String id) {

    String data = "{\"drivein_id\": " + "\"" + id + "\"}";
    System.out.println(data);
    logger.info("Data to nczi: {}", data);

    HttpEntity<String> request = new HttpEntity<>(data);
    return template.postForObject(baseUrl + "validate_drivein_times", request, String.class);
  }

}
