/*
 * Andrew West
 * Version 1
 * 2/22/12
 * 
 */
//imports packages needed for compiling
import java.awt.Graphics;
import java.awt.Graphics2D;
import java.awt.Point;
import java.awt.Rectangle;
import javax.swing.JComponent;
//The class name 
public class RectangleComponent extends JComponent 
{
	//sets the coordinates of the box and the size
	private static final int BOX_X = 125;
	private static final int BOX_Y = 340;
	private static final int BOX_WIDTH = 20;
	private static final int BOX_HEIGHT = 30;
	
	private Rectangle box;
	//constructor for the class and creates the box
	public RectangleComponent()
	{
		box = new Rectangle(BOX_X, BOX_Y, BOX_WIDTH, BOX_HEIGHT);
	}
	//adds graphics to the box
	public void paintComponent(Graphics g)
	{
		Graphics2D g2 = (Graphics2D) g;
		
		g2.draw(box);
	}
	//allows for the box to be set in a particular location, and moved repeatedly
	public void moveTo(int x, int y)
	{
		box.setLocation(x, y);
		repaint();
	}

}
