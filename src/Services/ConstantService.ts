abstract class Config {
  public abstract urls: string;
}

class Development extends Config {
  public urls = "http://localhost:8080/";
}

class Production extends Config {
  public urls =
    "https://raw.githubusercontent.com/KobiShashs/TODO-JSON/main/tasks";
}

const global =
  process.env.NODE_ENV === "development" ? new Development() : new Production();
export default global;
