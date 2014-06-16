/*
 * Andrew West
 * 2/24/12
 * Version 1
 */
import java.awt.*;
import java.util.Random;

import javax.swing.*;

public class RectangleComponent extends JComponent 
{	
	private static final int BOX_WIDTH = 20;
	private static final int BOX_HEIGHT = 30;

	Random generator;
	
	Random shape1;
	Random shape2;
	Random shape3;
	Random shape4;
	Random shape5;
	Random shape6;
	Random shape7;
	Random shape8;
	Random shape9;
	Random shape10;
	
	private Rectangle box;
	private Rectangle box1;
	private Rectangle box2;
	private Rectangle box3;
	private Rectangle box4;
	private Rectangle box5;
	private Rectangle box6;
	private Rectangle box7;
	private Rectangle box8;
	private Rectangle box9;
	private Rectangle box10;

	
	//constructor for RectangleComponent, creates 10 rectangles with different x and y locations and sizes
	public RectangleComponent()
	{
		generator = new Random();
		int x = generator.nextInt(700);
		int y = generator.nextInt(100);
		shape1 = new Random();
		int dx1 = shape1.nextInt(700);
		int dy1 = shape1.nextInt(100);
		shape2 = new Random();
		int dx2 = shape2.nextInt(700);
		int dy2 = shape2.nextInt(100);
		shape3 = new Random();
		int dx3 = shape3.nextInt(700);
		int dy3 = shape3.nextInt(100);
		shape4 = new Random();
		int dx4 = shape4.nextInt(700);
		int dy4 = shape4.nextInt(100);
		shape5 = new Random();
		int dx5 = shape5.nextInt(700);
		int dy5 = shape5.nextInt(100);
		shape6 = new Random();
		int dx6 = shape6.nextInt(700);
		int dy6 = shape6.nextInt(100);
		shape7 = new Random();
		int dx7 = shape7.nextInt(700);
		int dy7 = shape7.nextInt(100);
		shape8 = new Random();
		int dx8 = shape8.nextInt(700);
		int dy8 = shape8.nextInt(100);
		shape9 = new Random();
		int dx9 = shape9.nextInt(700);
		int dy9 = shape9.nextInt(100);
		shape10 = new Random();
		int dx10 = shape10.nextInt(700);
		int dy10 = shape10.nextInt(100);
		
		box = new Rectangle(x, y,BOX_WIDTH,BOX_HEIGHT);
		box1 = new Rectangle(dx1, dy1,BOX_WIDTH,BOX_HEIGHT);
		box2 = new Rectangle(dx2, dy2,BOX_WIDTH,BOX_HEIGHT);
		box3 = new Rectangle(dx3, dy3,BOX_WIDTH,BOX_HEIGHT);
		box4 = new Rectangle(dx4, dy4,BOX_WIDTH,BOX_HEIGHT);
		box5 = new Rectangle(dx5, dy5,BOX_WIDTH,BOX_HEIGHT);
		box6 = new Rectangle(dx6, dy6,BOX_WIDTH,BOX_HEIGHT);
		box7 = new Rectangle(dx7, dy7,BOX_WIDTH,BOX_HEIGHT);
		box8 = new Rectangle(dx8, dy8,BOX_WIDTH,BOX_HEIGHT);
		box9 = new Rectangle(dx9, dy9,BOX_WIDTH,BOX_HEIGHT);
		box10 = new Rectangle(dx10, dy10,BOX_WIDTH,BOX_HEIGHT);
	}
	//draws the rectangles
	public void paintComponent(Graphics g)
	{
		Graphics2D g2 = (Graphics2D) g;
		g2.draw(box);
		g2.draw(box1);
		g2.draw(box2);
		g2.draw(box3);
		g2.draw(box4);
		g2.draw(box5);
		g2.draw(box6);
		g2.draw(box7);
		g2.draw(box8);
		g2.draw(box9);
		g2.draw(box10);

	}
	//allows each rectangle to be capable of moving
	public void moveBy(int dx, int dy)
	{
		box.translate(dx,dy);
		box1.translate(dx,dy);
		box2.translate(dx,dy);
		box3.translate(dx,dy);
		box4.translate(dx,dy);
		box5.translate(dx,dy);
		box6.translate(dx,dy);
		box7.translate(dx,dy);
		box8.translate(dx,dy);
		box9.translate(dx,dy);
		box10.translate(dy,dy);
		repaint();
	}
	//allows each rectangle to be placed in different coordinates
	public void moveTo(int x, int y)
	{
		box.setLocation(x,y);
		box1.setLocation(x,y);
		box2.setLocation(x,y);
		box3.setLocation(x,y);
		box4.setLocation(x,y);
		box5.setLocation(x,y);
		box6.setLocation(x,y);
		box7.setLocation(x,y);
		box8.setLocation(x,y);
		box9.setLocation(x,y);
		box10.setLocation(x,y);
		repaint();
	}

}

