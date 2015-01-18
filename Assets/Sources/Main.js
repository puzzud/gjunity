#pragma strict

public class Main extends MonoBehaviour
{
  public var player : GameObject[];
  protected var playerDirection : Vector3[];
  
  protected var menuActive : boolean = false;
  
  protected var frameCounter8 : int = 0;

  function Start()
  {
    if( playerDirection == null )
    {
      playerDirection = new Vector3[2];
      playerDirection[0] = new Vector3();
      playerDirection[1] = new Vector3();
    }
  }

  function Update()
  {
    processInput();
    processMove();
  }
  
  protected function processInput()
  {
    if( Input.GetKey( KeyCode.Escape ) )
    {
      // Activate or deactivate menu.
      menuActive = !menuActive;
      
      // NOTE: Temporary quit.
      Application.Quit();
    }
    
    processPlayerInput();
  }
  
  protected function processPlayerInput()
  {
    var xDirection : int = 0;
    for( var playerIndex : int = player.Length - 1; playerIndex > -1; playerIndex-- )
    {
      //var currentPlayer : GameObject = player[playerIndex];
      
      xDirection = 0.0f;
      if( playerIndex == 0 )
      {
        if( Input.GetKey( KeyCode.LeftArrow ) )
        {
          xDirection -= 1.0f;
        }
        
        if( Input.GetKey( KeyCode.RightArrow ) )
        {
          xDirection += 1.0f;
        }
      }
      
      playerDirection[playerIndex].x = xDirection;
    }
  }
  
  protected function processMove()
  {
    if( --frameCounter8 >= 0 )
    {
      return;
    }
    
    frameCounter8 += 8;
    
    var currentPlayer : GameObject = null;
    var xDirection : float = 0.0f;
    for( var playerIndex : int = player.Length - 1; playerIndex > -1; playerIndex-- )
    {
      xDirection = playerDirection[playerIndex].x;
    
      // Move player based on direction.
      if( xDirection != 0.0 )
      {
        currentPlayer = player[playerIndex];
        
        //currentPlayer.transform.position.x += 1.0f * xDirection;
        //currentPlayer.rigidbody.AddForce( xDirection * 100.0f, 0, 0 );
        
        currentPlayer.rigidbody.velocity.x += xDirection * 5.0f;
      }
    }
    
  }
}
