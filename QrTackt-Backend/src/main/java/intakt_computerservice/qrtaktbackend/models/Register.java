package intakt_computerservice.qrtaktbackend.models;

import lombok.Data;

@Data
public class Register {
    private String firmName;
    private String firstname;
    private String lastname;
    private String email;
    private String password;
    private String conform;
    private String phone;
    private String website;
    private boolean agreement;
}
