package com.example.demo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class UserService {

    private final UserRepository userRepository;

    @Autowired
    public UserService(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    public List<CustomerAccount> getAllUsers() {
        return userRepository.findAll();
    }

    public Optional<CustomerAccount> getUserById(Long id) {
        return userRepository.findById(id);
    }

    public CustomerAccount createUser(CustomerAccount user) {
        return userRepository.save(user);
    }

    public CustomerAccount updateUser(Long id, CustomerAccount userDetails) {
        CustomerAccount user = userRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("User not found with id: " + id));

        user.setUsername(userDetails.getUsername());
        user.setPassword(userDetails.getPassword());
        user.setEmail(userDetails.getEmail());

        return userRepository.save(user);
    }

    public void deleteUser(Long id) {
        userRepository.deleteById(id);
    }
}
