package intakt_computerservice.qrtaktbackend.models;

import lombok.Data;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

@Data
@Entity
public class Firm {
    @Id
    @GeneratedValue
    private int id;
    @Column(unique = true, nullable = false)
    private String firmName;
    @Column(unique = true, nullable = false)
    private String email;
    private String phoneNumber;
    private String street;
    private String postCode;
    private String websiteUrl;
    @Column(nullable = false)
    private Version version = Version.LITE;
}
