package intakt_computerservice.qrtaktbackend.controller;

import intakt_computerservice.qrtaktbackend.models.Firm;
import intakt_computerservice.qrtaktbackend.models.Register;
import intakt_computerservice.qrtaktbackend.services.FirmService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("api/v1/firms")
public class FirmController {

    private FirmService firmService;

    @Autowired
    public FirmController(FirmService firmService) {
        this.firmService = firmService;
    }

    @GetMapping
    public List<Firm> getAllFirms(){
        return firmService.findAll();
    }

    @GetMapping("{id}")
    public Firm getFirmById(@PathVariable int id){
        Firm firm = firmService.findById(id);
        return firm;
    }

    @PostMapping
    public void createFirm(@RequestBody Register registerForm){
        Firm firm = new Firm();
        if(registerForm.isAgreement()){
            firm.setFirmName(registerForm.getFirmName());
            firm.setPhoneNumber(registerForm.getPhone());
            firm.setWebsiteUrl(registerForm.getWebsite());
            firm.setEmail(registerForm.getEmail());
            firmService.save(firm);
        }
    }

    @GetMapping("exists")
    public boolean firmExists(@RequestParam String name){
        return firmService.exists(name);
    }
}
