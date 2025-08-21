
public class student {
    private String name;
    private int age;
    private String grade;


    public student(String name, int age, String grade) {
        this.name = name;
        this.age = age;
        this.grade = grade;
    }


    public String getName() {
        return name;
    }


    public void setName(String name) {
        this.name = name;
    }

    // Getter for age
    public int getAge() {
        return age;
    }

    public void setAge(int age) {
        this.age = age;
    }

    // Getter for grade
    public String getGrade() {
        return grade;
    }

    // Setter for grade
    public void setGrade(String grade) {
        this.grade = grade;
    }
}