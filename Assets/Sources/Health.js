#pragma strict

public class Health extends MonoBehaviour
{
  public var healthBonus : float = 1.0f;

  function Start()
  {

  }

  function OnTriggerEnter( collider : Collider )
  {
    var entity : Entity = collider.GetComponent( Entity );
    if( entity == null )
    {
      return;
    }
    
    entity.health += this.healthBonus;
    print( "" + entity.health + " " + "Health" );
  
    //enabled = false;
    //audio.Play();
    
    //print( "Health" );
    
    this.active = false;
    //this.collider.enabled = false;
    //this.renderer.enabled = false;
  }
}
