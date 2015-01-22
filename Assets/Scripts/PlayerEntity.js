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
      entity.collider.enabled = false;
      entity.renderer.enabled = false;
      
      if( eatSound != null )
      {
        audio.PlayOneShot( eatSound );
      }
    }
  }
}
