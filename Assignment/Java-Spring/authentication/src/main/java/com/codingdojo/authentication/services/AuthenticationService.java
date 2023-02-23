
package com.codingdojo.authentication.services;

import com.codingdojo.authentication.models.LoginUser;
import com.codingdojo.authentication.models.User;
import com.codingdojo.authentication.repositories.UserRepository;
import org.mindrot.jbcrypt.BCrypt;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.validation.BindingResult;

import java.util.Optional;

@Service
public class AuthenticationService {
    @Autowired
    private UserRepository userRepo;

    public User register(User user, BindingResult result) {
        Optional<User> opt =  userRepo.findByEmail(user.getEmail());

        // Reject if email is taken (present in database)
        if (opt.isPresent()){
            result.rejectValue("email", "EXIST",
                    "Email already exists");
            return null;
        }
        // Reject if password doesn't match confirmation
        if (!user.getPassword().equals(user.getConfirm())) {
            result.rejectValue("confirm", "MATCH",
                    "Password & Confirm Password do not match");
            return null;
        }

        // Hash and set password, save user to database
        user.setPassword(BCrypt.hashpw(user.getPassword(), BCrypt.gensalt()));
        return userRepo.save(user);
    }

    public User login(LoginUser user, BindingResult result) {
        Optional<User> opt =  userRepo.findByEmail(user.getEmail());
        // Check if email is present
        if (opt.isEmpty()) {
            result.rejectValue("email", "EXIST",
                    "Invalid email and/or password");
            return null;
        }

        // Check if password matches the DB password
        User dbUser = opt.get();
        if(!BCrypt.checkpw(user.getPassword(), dbUser.getPassword())) {
            result.rejectValue("password", "MATCH", "Invalid email and/or password!");
            return null;
        }

        return dbUser;
    }


}
