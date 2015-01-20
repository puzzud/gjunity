#pragma strict

public class CameraControl extends MonoBehaviour
{
	public var target : GameObject;
	public var targetDistance : float;
	
	public var smoothRotation : boolean = false;
	public var followAtDistance : boolean = false;

	public function Start()
	{
		//transform.LookAt( lookAtTransform );
	}

	public function Update()
	{
		if( target != null )
		{
			var targetTransform : Transform = target.transform;
		
			if( followAtDistance )
			{
				var wantedPosition : Vector3 = targetTransform.TransformPoint( 0, 0, targetDistance );
				
				//transform.position = wantedPosition;
				transform.position = Vector3.Lerp( transform.position, wantedPosition, Time.deltaTime * 100 );
			}
			
			if( smoothRotation )
			{
				var wantedRotation : Quaternion = Quaternion.LookRotation( targetTransform.position - transform.position, Vector3.up );
				transform.rotation = Quaternion.Slerp( transform.rotation, wantedRotation, Time.deltaTime * 5.0 );
			}
			else
			{
				transform.LookAt( targetTransform );
			}
		}
	}
}
