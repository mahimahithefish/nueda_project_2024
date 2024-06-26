package com.example.demo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Date;
import java.util.List;
import java.util.Optional;

@Service
public class CustomerAccountService {

    private final CustomerAccountRepository customerAccountRepository;

    @Autowired
    public CustomerAccountService(CustomerAccountRepository customerAccountRepository) {
        this.customerAccountRepository = customerAccountRepository;
    }

    public List<CustomerAccount> getAllUsers() {
        return customerAccountRepository.findAll();
    }

    public Optional<CustomerAccount> getUserById(Long id) {
        return customerAccountRepository.findById(id);
    }

    public CustomerAccount createCustomerAccount(CustomerAccount user) {
        return customerAccountRepository.save(user);
    }

    public CustomerAccount updateCustomerAccount(Long id, CustomerAccount userDetails) {
        CustomerAccount user = customerAccountRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Customer account not found with id: " + id));

        user.setName(userDetails.getName());
        user.setDob(userDetails.getDob());
        user.setUsername(userDetails.getUsername());
        user.setPassword(userDetails.getPassword());
        user.setEmail(userDetails.getEmail());
        user.setPhoneNum(userDetails.getPhoneNum());
        user.setAddress(userDetails.getAddress());

        return customerAccountRepository.save(user);
    }

    public void deleteUser(Long id) {
        customerAccountRepository.deleteById(id);
    }
}
