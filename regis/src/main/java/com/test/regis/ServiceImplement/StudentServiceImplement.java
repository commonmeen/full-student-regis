package com.test.regis.ServiceImplement;

import com.test.regis.Entities.Student;
import com.test.regis.Repositories.StudentRepository;
import com.test.regis.Services.StudentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class StudentServiceImplement implements StudentService {
    @Autowired
    StudentRepository studentRepository;

    @Override
    public Student creatStudent(Student student){
        return studentRepository.save(student);
    }

    @Override
    public Student getStudentById(long id) {
        return studentRepository.getStudentById(id);
    }

    @Override
    public Student getStudentByName(String name){
        return studentRepository.getStudentByName(name);
    }

    @Override
    public Iterable<Student> getAllStudent(){
        return studentRepository.findAll();
    }

    @Override
    public void delete(long id){
        studentRepository.deleteById(id);
    }

    @Override
    public void deleteAll(){
        studentRepository.deleteAll();
    }
}
