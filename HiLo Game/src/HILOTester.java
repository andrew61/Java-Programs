
import java.util.Random;
import java.util.Scanner;

public class HILOTester
{
	
	static int User;  //User is a integer 
 	static int number;  //number is a integer and is the random number
	static boolean done;
	static String input;
	
// allows for user input, random number generation and begins the while loop, and a boolean statement so that later the game will end
    public static void main(String[] args)
    {
    	Scanner in = new Scanner(System.in);
    	Random generator = new Random();
    	number = generator.nextInt(1000);
    	done = false;
    	System.out.println("Guess a number between 0 and 1000: , enter Q to quit."); 
    	input = in.next();
        while (! done)
	{
        	
        	// if user doesn't want to continue press q to quit
			if(input.equalsIgnoreCase("Q"))
        	{
        		done = true;
        		
        	}
        User = in.nextInt();

   // if User is more than number the console outputs that the user input is too hi.
		if(User > number)
		{
			System.out.println("Hi");
		}
	// if User is less than number the console outputs that the user input is too low.	
		if(User < number)
		{
			System.out.println("Lo");
		}
	// if User is the same as number the console outputs that the user has guessed correctly.    	
		if(User == number)
		{
			System.out.println("You Guessed Correctly Congratulation!!!!! :)");
			done = true;
		} 
	}
  }	
}     
   


