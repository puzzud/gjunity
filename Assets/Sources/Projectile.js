#pragma strict

public class Projectile extends MonoBehaviour
{
  public var isInstant : boolean = false;

  function Start()
  {
    
  }

  function Update()
  {
    if( Input.GetKeyDown( KeyCode.Space ) )
    {
      if( transform.rigidbody != null )
      {
        transform.rigidbody.velocity += transform.forward * 100;
      }
    }
  }
}
