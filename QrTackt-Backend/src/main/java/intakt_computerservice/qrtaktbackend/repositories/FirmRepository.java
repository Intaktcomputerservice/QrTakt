package intakt_computerservice.qrtaktbackend.repositories;


import intakt_computerservice.qrtaktbackend.models.Firm;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface FirmRepository extends JpaRepository<Firm, Integer> {
}
