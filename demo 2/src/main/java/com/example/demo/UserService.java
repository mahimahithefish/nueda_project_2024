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

    public List<UserAccount> getAllUsers() {
        return userRepository.findAll();
    }

    public Optional<UserAccount> getUserById(Long id) {
        return userRepository.findById(id);
    }

    public UserAccount createUser(UserAccount user) {
        return userRepository.save(user);
    }

    public UserAccount updateUser(Long id, UserAccount userDetails) {
        UserAccount user = userRepository.findById(id)
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
