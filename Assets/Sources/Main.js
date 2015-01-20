#pragma strict

public class Main extends MonoBehaviour
{
  public static var audioListener : AudioListener = null;

  protected var menuActive : boolean = false;

  //public var playerList : GameObject[];
  public var entities : Entity[];
  
  function Start()
  {
    if( Main.audioListener == null )
    {
      //Main.audioListener = audio;
    }
  }

  function Update()
  {
    processInput();
    processMove();
    processAnimation();
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
