package com.example.demo;

import com.example.demo.CustomerAccount;
import com.example.demo.CustomerAccountRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import java.util.Calendar;
import java.util.Date;
import java.util.List;
@Configuration
public class DBInitAccounts {
    @Bean
    CommandLineRunner initDB(CustomerAccountRepository customerRepo) {
        return args -> {
//            var customers = List.of(new CustomerAccount(1L, "John Doe", "20240522", 4074043383L, "123 Main Street", "tuna", "123", "ed@gmail.com"));
            var customers = List.of(
                    new CustomerAccount(1L, "John Doe", "2024-05-22", 4074043383L, "123 Main Street", "tuna", "123", "ed@gmail.com"),
                    new CustomerAccount(2L, "Jane Smith", "2023-06-15", 3055551234L, "456 Elm Street", "salmon", "124", "jane.smith@example.com"),
                    new CustomerAccount(3L, "Alice Johnson", "2024-01-01", 2125555678L, "789 Oak Street", "chicken", "125", "alice.j@example.com"),
                    new CustomerAccount(4L, "Bob Brown", "2023-12-30", 7185558765L, "101 Pine Street", "beef", "126", "bob.brown@example.com"),
                    new CustomerAccount(5L, "Charlie Davis", "2023-07-19", 7025553421L, "202 Maple Street", "pork", "127", "charlie.d@example.com"),
                    new CustomerAccount(6L, "Daniela White", "2024-05-10", 6195551234L, "303 Birch Street", "vegan", "128", "daniela.white@example.com"),
                    new CustomerAccount(7L, "Ethan Clark", "2023-11-11", 5035557890L, "404 Cedar Street", "seafood", "129", "ethan.clark@example.com"),
                    new CustomerAccount(8L, "Fiona Lewis", "2023-06-25", 6175554321L, "505 Walnut Street", "vegetarian", "130", "fiona.lewis@example.com"),
                    new CustomerAccount(9L, "George Hall", "2024-02-20", 4155559876L, "606 Ash Street", "meat", "131", "george.hall@example.com"),
                    new CustomerAccount(10L, "Hannah Young", "2023-12-12", 3125556789L, "707 Cherry Street", "fish", "132", "hannah.young@example.com"),
                    new CustomerAccount(11L, "Ian King", "2023-07-07", 2135551234L, "808 Poplar Street", "tuna", "133", "ian.king@example.com"),
                    new CustomerAccount(12L, "Julia Wright", "2024-03-14", 5165552345L, "909 Magnolia Street", "salmon", "134", "julia.wright@example.com"),
                    new CustomerAccount(13L, "Kevin Martinez", "2023-08-08", 7025553456L, "1010 Dogwood Street", "chicken", "135", "kevin.m@example.com"),
                    new CustomerAccount(14L, "Laura Hernandez", "2024-04-18", 3035554567L, "1111 Fir Street", "beef", "136", "laura.h@example.com"),
                    new CustomerAccount(15L, "Mike Lopez", "2024-02-29", 4045555678L, "1212 Willow Street", "pork", "137", "mike.lopez@example.com"),
                    new CustomerAccount(16L, "Nina Gonzalez", "2023-11-30", 2145556789L, "1313 Sycamore Street", "vegan", "138", "nina.g@example.com"),
                    new CustomerAccount(17L, "Oliver Nelson", "2024-06-01", 5185557890L, "1414 Cypress Street", "seafood", "139", "oliver.n@example.com"),
                    new CustomerAccount(18L, "Paula Carter", "2023-01-20", 3055551234L, "1515 Palm Street", "vegetarian", "140", "paula.c@example.com"),
                    new CustomerAccount(19L, "Quinn Roberts", "2024-03-25", 2125552345L, "1616 Spruce Street", "meat", "141", "quinn.r@example.com"),
                    new CustomerAccount(20L, "Rachel Wilson", "2023-10-10", 6175553456L, "1717 Hemlock Street", "fish", "142", "rachel.w@example.com"),
                    new CustomerAccount(21L, "Sam Lee", "2023-11-15", 4155554567L, "1818 Cedar Street", "tuna", "143", "sam.lee@example.com"),
                    new CustomerAccount(22L, "Tina Adams", "2023-06-05", 3125555678L, "1919 Maple Street", "salmon", "144", "tina.adams@example.com"),
                    new CustomerAccount(23L, "Uma Brown", "2024-02-01", 2135556789L, "2020 Oak Street", "chicken", "145", "uma.brown@example.com"),
                    new CustomerAccount(24L, "Victor Harris", "2024-03-12", 5035557890L, "2121 Pine Street", "beef", "146", "victor.h@example.com"),
                    new CustomerAccount(25L, "Wendy Garcia", "2024-05-03", 7185551234L, "2222 Birch Street", "pork", "147", "wendy.g@example.com"),
                    new CustomerAccount(26L, "Xander Scott", "2023-01-22", 6195552345L, "2323 Elm Street", "vegan", "148", "xander.s@example.com"),
                    new CustomerAccount(27L, "Yara Young", "2023-02-15", 7025553456L, "2424 Fir Street", "seafood", "149", "yara.y@example.com"),
                    new CustomerAccount(28L, "Zachary Hill", "2023-03-05", 5035554567L, "2525 Ash Street", "vegetarian", "150", "zachary.h@example.com"),
                    new CustomerAccount(29L, "Anna Bell", "2024-01-11", 4155555678L, "2626 Spruce Street", "meat", "151", "anna.b@example.com"),
                    new CustomerAccount(30L, "Brian Clark", "2024-04-22", 5165556789L, "2727 Cherry Street", "fish", "152", "brian.c@example.com")
            );
            customerRepo.saveAll(customers);
        };
    }
}