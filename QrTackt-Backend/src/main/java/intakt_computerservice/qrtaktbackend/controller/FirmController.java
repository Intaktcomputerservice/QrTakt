package intakt_computerservice.qrtaktbackend.controller;

import intakt_computerservice.qrtaktbackend.models.Firm;
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
    public void createFirm(@RequestBody Firm firm){
        firmService.save(firm);
    }
}
