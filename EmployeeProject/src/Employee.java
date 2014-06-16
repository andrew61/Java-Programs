/*
 * Andrew West
 * 2/24/12
 * version 1
 */
public class Employee 
{	
	private String name;
	private int Salary;
	//private int HourlyWage;
	//constructor for class employee, set the name, salary, and hourly wage
	public Employee (String aName, int s1)//, int HW2)
	{
		name = aName;
		Salary = s1;
		//HourlyWage = HW2;
	}
	//overrides the toString method
	public String toString()
	{
		String description = name + " Annual Salary: " + Salary + " gets and anuual amount of: " + (Salary);
		return description;
	}

}
