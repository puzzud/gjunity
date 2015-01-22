#pragma strict

public class FloatingEntity extends Entity
{
  public var value : int = 1;
  
  public var floatingHeight : float = 2.0f;
  public var floatingOscillationVariance : float = 0.25f;
  public var floatingOscillationSpeed : float = 0.01f;
  private var floatingOscillation : float = 0.5f;
  private var floatingOscillationDirection : int = -1;
  
  public var rotationSpeed : float = 1.0f;
  
  function Update()
  {
    if( rotationSpeed != 0.0f )
    {
      transform.Rotate( 0.0f, 0.0f, rotationSpeed );
    }
    
    var distanceFromGround : float = 0.0f;
    
    if( floatingOscillationVariance != 0.0f )
    {
      if( floatingOscillationDirection < 0 )
      {
        floatingOscillation -= floatingOscillationSpeed;
        if( floatingOscillation <= 0.0 )
        {
          floatingOscillationDirection = 1;
        }
      }
      else
      {
        floatingOscillation += floatingOscillationSpeed;
        if( floatingOscillation >= 1.0 )
        {
          floatingOscillationDirection = -1;
        }
      }
      
      var floatingOscillationOffset : float =
        Mathf.Lerp( -floatingOscillationVariance,
                    floatingOscillationVariance,
                    hermite( floatingOscillation ) );
                    
      distanceFromGround = floatingHeight + floatingOscillationOffset;
    }
    
    var hit : RaycastHit;
    if( Physics.Raycast( transform.position, Vector3.down, hit ) )
    {
      transform.position.y = hit.point.y + distanceFromGround;
    }
  }
  
  protected function hermite( t : float ) : float
  {
    return 3.0f * t * t - 2.0f * t * t * t;
  }
}
