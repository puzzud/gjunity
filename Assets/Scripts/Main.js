#pragma strict

public class Main extends MonoBehaviour
{
  public static var audioListener : AudioListener = null;

  protected var menuActive : boolean = false;
  public var menuCanvas : Canvas;

  //public var playerList : GameObject[];
  public var entities : Entity[];
  
  function Start()
  {
    
  }

  function Update()
  {
    processInput();
    processMove();
    processAnimation();
  }
  
  public function quit()
  {
    Application.Quit();
  }
  
  protected function processInput()
  {
    if( Input.GetKeyDown( KeyCode.Escape ) )
    {
      // Activate or deactivate menu.
      menuActive = !menuActive;
      print( "" + menuCanvas.name );
      var canvasGroup : CanvasGroup = menuCanvas.GetComponent( CanvasGroup );
      if( canvasGroup != null )
      {
        print( "canvasGroup" );
        canvasGroup.alpha = 1;
        canvasGroup.interactable = true;
        canvasGroup.blocksRaycasts = true;
      }
    }
    
    if( Input.GetKey( KeyCode.Alpha1 ) )
    {
      print( "Load ball game" );
      Application.LoadLevel( "BallPlatformGame" );
    }
    else
    if( Input.GetKey( KeyCode.Alpha2 ) )
    {
      print( "Load base" );
      Application.LoadLevel( "base" );
    }
    
    processPlayerInput();
  }
  
  protected function processPlayerInput()
  {
    var entity : Entity = null;
    for( var entityIndex : int = entities.Length - 1; entityIndex > -1; entityIndex-- )
    {
      entity = entities[entityIndex];
      if( entity == null )
      {
        continue;
      }
      
      entity.pollIntendedDirection();
      
      entity.direction = entity.intendedDirection;
      entity.velocity = entity.direction * 0.25f;
    }
  }
  
  protected function processMove()
  {
    var entity : Entity = null;
    for( var entityIndex : int = entities.Length - 1; entityIndex > -1; entityIndex-- )
    {
      entity = entities[entityIndex];
      if( entity == null )
      {
        continue;
      }
      
      entity.move();
    }
  }
  
  protected function processAnimation()
  {
    
  }
}
