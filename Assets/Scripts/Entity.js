#pragma strict

public class Entity extends MonoBehaviour
{
  public var alignment : float = 0.0f;
  public var health : float = 100.0f;
  
  public var intendedDirection : Vector3;
  public var direction : Vector3;

  public var velocity : Vector3;

  function Start()
  {
    direction = transform.forward;
  }
  
  public function pollIntendedDirection()
  {
    var xDirection : float = 0.0f;
    
    if( alignment > 0.0f )
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
    
    intendedDirection.x = xDirection;
  }
  
  public function move()
  {
    transform.position += velocity;
  }
  
  public function isMoving()
  {
    return ( velocity.magnitude > 0.0f );
  }
}
