using UnityEngine;
using System.Collections;

public class EnemyController : EntityController {

  protected override void update()
  {
    GameObject hero = GameObject.Find("Hero");
    if (hero)
    {
      velocity = Vector3.Normalize(hero.transform.position - transform.position);
      velocity *= speed;
    }
  }
}
