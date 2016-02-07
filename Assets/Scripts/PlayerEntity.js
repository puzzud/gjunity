#pragma strict

public class PlayerEntity extends Entity
{
  var eatSound : AudioClip;

  function OnTriggerEnter( collider : Collider )
  {
    var entity : Entity = collider.GetComponent( Entity );
    if( entity == null )
    {
      return;
    }
    
    if( entity.alignment < 0.0f )
    {
      enabled = false;
      entity.GetComponent.<Collider>().enabled = false;
      entity.GetComponent.<Renderer>().enabled = false;
      
      if( eatSound != null )
      {
        GetComponent.<AudioSource>().PlayOneShot( eatSound );
      }
    }
  }
}
