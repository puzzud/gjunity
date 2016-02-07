using UnityEngine;
using System.Collections;

public class PlayerController : EntityController {

  protected override void update()
  {
    // Hero Movement
    velocity.x = Input.GetAxis("Horizontal") * speed;
    velocity.y = Input.GetAxis("Vertical") * speed;
  }
}
