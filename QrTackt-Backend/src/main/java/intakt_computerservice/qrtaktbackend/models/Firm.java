package intakt_computerservice.qrtaktbackend.models;

import lombok.Data;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

@Data
@Entity
public class Firm {
    @Id
    @GeneratedValue
    private int id;
    private String firmName;
    private String phoneNumber;
    private String street;
    private String postCode;
    private String websiteUrl;
    private Version version;
}
