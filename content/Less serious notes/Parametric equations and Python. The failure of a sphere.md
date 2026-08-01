---
tags:
  - math
  - coding
date: 06/25/26
---

My intention was to create a sphere in python using the Manim library. In order to create it I needed to find a set of parametric equations that were able to escribe a sphere using parameters.
- $u$: angle in $radians$ around the $z$ pole and
- $v$: describing the distance in the $z$ axis
I tried using $x(u)= \sin(u)\cos(u)$ and $y(u)= \cos(u)$. Then, to describe the change in height from the $xy-plane$, $z(v)=\cos(v)$. Very surprisingly, it worked. 
See image below of a diagram describing more or less the intended motion.
![](Pasted%20image%2020260625235638.png)
![](Pasted%20image%2020260625235642.png)

As I said before, it didn't quite work.

I realized that simply using the 2 dimensional version of a parametric circle[^1] would now work because as our distance from the $xy-plane$ increases, the radius of each circle decreases. I might be understanding or reasoning this in the wrong way but in my head it did make sense. The problem is that if we input $\pi$ values $[0,2\pi]$ it may appear that if we start from the top and we supposed both parameters $u$ and $v$ 'advance' at the same rate, it would work. 
Since I barely started learning to use **Manim**[^2] today and I had not done much on python in the last year, I was pretty rusty and it was tedious to find my way around. Eight fun and *well* spent hours on creating this thing...

I just love solving problems that don't exist...

I'm not completely sure of why I believed this would work in my head, it might be the mental fatigue but it was very fun to just **believe*** that it would work!, Below is the code that created the weird shape that even if it wasn't the one I intended, I found it interesting since it threw me back to a flashback of me doing a lab at 9:00 pm at the Love Library!
![](Pasted%20image%2020260625235652.png)





```python
from manim import *
import numpy as np
class NapkingRing(ThreeDScene):

def construct(self):
	Camera1 = self.set_camera_orientation(
	phi= 90 * DEGREES,
	theta= -45*DEGREES
	)
	axes= ThreeDAxes()
	AxesLabels = axes.get_axis_labels(
		x_label = "x",
		y_label = "y",
		z_label = "z"
	)
	radius=1
	height=2
	res = 5
	cylinder = Surface(
		lambda u, v: np.array([
			radius * np.cos(u),
			radius * np.sin(u),
			v,
			]),
			u_range= [0,TAU],
			v_range = [-height/2 , height/2],
			resolution=[res,res]
		)
	sphere = Surface(
		lambda u, v: np.array([
			radius * np.cos(u),
			radius * np.sin(u)*np.cos(u),
			radius * np.cos(v),
		]),
		u_range= [0,TAU],
		v_range = [0, TAU],
		resolution=[res,res]
	)
	
	cylinder.set_color(RED)
	self.begin_ambient_camera_rotation()
	self.add(AxesLabels, axes, sphere)
	#self.play(Create(cylinder).set_run_time(4))
	#not currently using "cylinder"
	#self.wait(5)
```





[^1]: The two-dimensional parametric circle can be described with the following set of parametric equations:
	x = cos(u)
	y = sin(u)
[^2]: I will talk about Manim later. If you want to see what is Manim capable of creating, go check out the [3Blue1Brown](https://youtu.be/ldxFjLJ3rVY?si=4E25CSm4NZYcoltG) YT channel!! (P.S: He actually created Manim!)