import java.util.*;

public class EmployeeTester 
{

	/**
	 * @param args
	 */
	//main method
	public static void main(String[] args) {
		// TODO Auto-generated method stub
		//creates 1 employee with an annual salary
		Employee a = new Employee("AnEmployee",95000);
		//System.out.println(a);
		//creates an array list of 4 employees with separate salaries
		ArrayList <Employee> myList = new ArrayList <Employee> ();
		myList.add(a);
		myList.add(new Employee("Employee#2",20000));
		myList.add(new Employee("Employee#3",50000));
		myList.add(new Employee("Employee#4",65000));
		myList.add(new Employee("Employee#5",1000000));
		//creates a for each loop for all 5 employees
		for (Employee imp : myList)
		{
			System.out.println(imp);
		}
	}

}