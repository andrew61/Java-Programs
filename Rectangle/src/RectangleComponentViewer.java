import java.awt.event.MouseEvent;
import java.awt.event.MouseListener;
import javax.swing.JFrame;

//The class name
public class RectangleComponentViewer
{
	//sets the size of the frame
	private static final int FRAME_WIDTH = 300;
	private static final int FRAME_HEIGHT = 400;
	//main method
	public static void main(String[] args)
	{
		
		final RectangleComponent component = new RectangleComponent();
		//the actions that must be taken if the mouse is clicked
		class MousePressListener implements MouseListener
		{
			public void mousePressed(MouseEvent event)
			{
				int x = event.getX();
				int y = event.getY();
				component.moveTo(x, 0);
			}
			
			public void mouseReleased(MouseEvent event) {}
			public void mouseClicked(MouseEvent event) {}
			public void mouseEntered(MouseEvent event) {}
			public void mouseExited(MouseEvent event) {}

			
		}
		
		MouseListener listener = new MousePressListener();
		component.addMouseListener(listener);
		//adds a JFrame, and the box to the it
		JFrame frame = new JFrame();
		frame.add(component);
		//sets the size of the JFrame, and allows for the frame to be closed, and allows for the frame to be visible
		frame.setSize(FRAME_WIDTH, FRAME_HEIGHT);
		frame.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
		frame.setVisible(true);
	}

}
