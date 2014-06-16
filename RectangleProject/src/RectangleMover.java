import java.awt.event.*;
import javax.swing.*;

public class RectangleMover
{

	private final int FRAME_WIDTH = 700;
	private final int FRAME_HEIGHT = 700;
	private	final RectangleComponent component = new RectangleComponent();
	//constructor for RectangleMover, creates a JFrame and adds the rectangles to it
	public RectangleMover()
	{
		JFrame frame = new JFrame();

		frame.setSize(FRAME_WIDTH,FRAME_HEIGHT);
		frame.setTitle("RectangleExample");
		frame.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);

		frame.add(component);

		frame.setVisible(true);

	}


	//sets the actions to be taken during an event, moving down on the y axis
	class TimerListener implements ActionListener
	{
		public void actionPerformed(ActionEvent event)
		{
			component.moveBy(0,1);
		}
	}
	//looks for when action needs to be taken
	public void action()
	{
		ActionListener listener = new TimerListener();
		final int DELAY = 100;
		Timer t = new Timer(DELAY, listener);
		t.start();
	}

}

