package sk.thenoen.coronatest.coronatest;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpMethod;
import org.springframework.http.client.ClientHttpRequest;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import java.io.IOException;
import java.net.URI;
import java.util.*;

@Service
public class DataService {

  private static Logger logger = LoggerFactory.getLogger(DataService.class);

  private static final String baseUrl = "https://mojeezdravie.nczisk.sk/api/v1/web/";
  private final RestTemplate template;

  public DataService() {

    template = new RestTemplate();

  }

  public String getDriveins() {

    final ClientHttpRequest request;
    try {
      final URI uri = URI.create(baseUrl + "get_driveins");
      request = template.getRequestFactory().createRequest(uri, HttpMethod.GET);

      final HttpHeaders headers = request.getHeaders();
      headers.put("Host", Collections.singletonList("mojeezdravie.nczisk.sk"));
      headers.put("Connection", Collections.singletonList("keep-alive"));
      headers.put("Pragma", Collections.singletonList("no-cache"));
      headers.put("Cache-Control", Collections.singletonList("no-cache"));
      headers.put("sec-ch-ua", Collections.singletonList("\"Chromium\";v=\"88\", \"Google Chrome\";v=\"88\", \";Not A Brand\";v=\"99\""));
      headers.put("Accept", Collections.singletonList("application/json, text/plain, */*"));
      headers.put("DNT", Collections.singletonList("1"));
      headers.put("sec-ch-ua-mobile", Collections.singletonList("?0"));
      headers.put("User-Agent", Collections.singletonList("Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/88.0.4324.150 Safari/537.36"));
      headers.put("Origin", Collections.singletonList("https://www.old.korona.gov.sk"));
      headers.put("Sec-Fetch-Site", Collections.singletonList("cross-site"));
      headers.put("Sec-Fetch-Mode", Collections.singletonList("cors"));
      headers.put("Sec-Fetch-Dest", Collections.singletonList("empty"));
      headers.put("Referer", Collections.singletonList("https://www.old.korona.gov.sk/"));
      headers.put("Accept-Encoding", Collections.singletonList("gzip, deflate, br"));
      headers.put("Accept-Language", Collections.singletonList("sk,en-US;q=0.9,en;q=0.8"));


      return template.getForObject(baseUrl + "get_driveins", String.class);

    } catch (RuntimeException | IOException e) {
      logger.error("Cannot retrieve Driveins: {}", e.getMessage());
      return "";
    }

  }

  public String getDriveinTimes(String id) {

    String data = "{\"drivein_id\": " + "\"" + id + "\"}";
//    System.out.println(data);
    logger.info("Data to nczi: {}", data);

    final HttpHeaders headers = new HttpHeaders();
    addHeaders(headers);
    HttpEntity<String> request = new HttpEntity<>(data, headers);
    try {
      return template.postForObject(baseUrl + "validate_drivein_times", request, String.class);
    } catch (RuntimeException e) {
      logger.error("Cannot retrieve Drivein times: {}", e.getMessage());
      return "";
    }
  }

  private void addHeaders(Map<String, List<String>> headers) {
    headers.put("Host", Collections.singletonList("mojeezdravie.nczisk.sk"));
    headers.put("Connection", Collections.singletonList("keep-alive"));
//    headers.put("Content-Length", Collections.singletonList("20"));
    headers.put("Pragma", Collections.singletonList("no-cache"));
    headers.put("Cache-Control", Collections.singletonList("no-cache"));
    headers.put("sec-ch-ua", Collections.singletonList("\"Chromium\";v=\"88\", \"Google Chrome\";v=\"88\", \";Not A Brand\";v=\"99\""));
    headers.put("Accept", Collections.singletonList("application/json, text/plain, */*"));
    headers.put("DNT", Collections.singletonList("1"));
    headers.put("sec-ch-ua-mobile", Collections.singletonList("?0"));
    headers.put("User-Agent", Collections.singletonList("Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/88.0.4324.150 Safari/537.36"));
    headers.put("Content-Type", Collections.singletonList("application/json;charset=UTF-8"));
    headers.put("Origin", Collections.singletonList("https://www.old.korona.gov.sk"));
    headers.put("Sec-Fetch-Site", Collections.singletonList("cross-site"));
    headers.put("Sec-Fetch-Mode", Collections.singletonList("cors"));
    headers.put("Sec-Fetch-Dest", Collections.singletonList("empty"));
    headers.put("Referer", Collections.singletonList("https://www.old.korona.gov.sk/"));
    headers.put("Accept-Encoding", Collections.singletonList("gzip, deflate, br"));
    headers.put("Accept-Language", Collections.singletonList("sk,en-US;q=0.9,en;q=0.8"));
  }
}
