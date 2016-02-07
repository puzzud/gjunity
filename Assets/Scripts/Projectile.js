#pragma strict

public class Projectile extends MonoBehaviour
{
  public var key : KeyCode;
  
  public var direction : Vector3;
  public var target : GameObject;
  
  public var velocity : float = 100.0f;
  
  public var fire : boolean = false;
  protected var fired : boolean = false;
  
  public var fireSound : AudioClip;

  function Start()
  {
    
  }

  function FixedUpdate()
  {
    if( Input.GetKeyDown( key ) )
    {
      fire = true;
    }
  
    if( !fired && fire )
    {
      fired = true;
      
      if( target != null )
      {
        direction = target.transform.position - transform.position;
      }
      else
      {
        direction = transform.forward;
      }
      
      if( transform.GetComponent.<Rigidbody>() != null )
      {
        transform.GetComponent.<Rigidbody>().velocity += direction * velocity;
      }
    
      if( fireSound != null )
      {
        AudioSource.PlayClipAtPoint( fireSound, transform.position );
      }
    }
  }
}
