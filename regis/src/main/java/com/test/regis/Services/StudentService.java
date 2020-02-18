package com.test.regis.Services;

import com.test.regis.Entities.Student;
import com.test.regis.Repositories.StudentRepository;
import javassist.NotFoundException;
import jdk.nashorn.internal.runtime.options.Option;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import sun.security.provider.certpath.OCSPResponse;

import java.util.Optional;


public interface StudentService {

    public Student creatStudent(Student student);
    public Student getStudentById(long id);
    public Student getStudentByName(String name);
    public Iterable<Student> getAllStudent();
    public void delete(long id);
    public void deleteAll();
}
