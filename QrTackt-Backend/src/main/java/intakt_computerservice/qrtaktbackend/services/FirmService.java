package intakt_computerservice.qrtaktbackend.services;

import intakt_computerservice.qrtaktbackend.models.Firm;
import intakt_computerservice.qrtaktbackend.repositories.FirmRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class FirmService {

    @Autowired
    private FirmRepository firmRepository;

    public List<Firm> findAll(){
        return firmRepository.findAll();
    }

    public Firm findById(int id){
        //ToDo: server validation 404 NotFound exception
        return firmRepository.findById(id).orElse(null);
    }

    public boolean exists(String name) {
        return firmRepository.existsByFirmName(name);
    }


    public void save(Firm firm){
        //Todo: add exception handling
        firmRepository.save(firm);
    }
}
