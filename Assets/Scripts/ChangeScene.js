#pragma strict

public class ChangeScene extends MonoBehaviour
{
  public function ChangeSceneByName( sceneName : String )
  {
    Application.LoadLevel( sceneName );
  }
  
  public function ChangeSceneByIndex( sceneIndex : int )
  {
    Application.LoadLevel( sceneIndex );
  }
}
