#pragma strict

public class SoundSystem extends MonoBehaviour
{
  public static var sounds : AudioClip[];
  
  public var _sounds : AudioClip[];
  
  //public var SOUND_ID_POP : int = 0;
  //protected var soundIdHash : Hashtable;
  
  function Start()
  {
    
  }

  public static function playSound( soundId : int )
  {
  
  }
  
  public static function registerSound( audioClip : AudioClip ) : int
  {
    if( audioClip == null )
    {
      return -1;
    }
  
    var id = sounds.Length;
    
    sounds[id] = audioClip;
    
    return id;
  }
}
