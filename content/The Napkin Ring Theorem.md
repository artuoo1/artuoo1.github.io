---
tags:
  - math
  - coding
  - manim
  - calculus
draft: false
title: The napkin ring theorem
Brief: A visually-charged journey in explaining how the volume of a napkin ring depends solely on its height regardless of its diameter, causing bizarre and anti-intuitive events.
date: 08/16/2026
---
You have surely seen a napkin ring before. It might've been at a party, wedding, or fancy restaurant. 
![374](Pasted%20image%2020260731175118.png)
“4 Pack Shiny Metallic Acrylic Napkin Rings.” [_eHomemart_, 2020,](https://ehomemart.com/products/4-pack-shiny-metallic-acrylic-napkin-rings)


A **napkin ring** is formed by drilling a cylindrical hole through the center of a sphere. 
Although it appears to be a rather boring and simple shape, something strange happens when we try to describe its volume mathematically.

The napkin ring theorem shows that if we drill a cylindrical hole through the center of any sphere with some radius $r_{s}$, the volume of the resulting shape will depend only on its height regardless of the original sphere's radius $r_{s}$. 

$$
V_{b}= \boxed{\frac{\pi h_{b}^3}{6}}
$$

Let's imagine we have two solid spheres, one is the size of a ping-pong ball and the other the size of the Sun. If we drill a cylindrical hole through both in such a way so the resulting pair of napkin rings have the same height, the resulting solids from the ping-pong ball and Sun would have the exact same volume.

![](Pasted%20image%2020260731175133.png)
The sphere has some radius $r_s$, which means that the distance from the origin to some point $P$ on the surface of the sphere will always be the radius $r_s$. Moreover, the distance from the origin to the north pole is also $r_s$, which gives us that the total height of a sphere is $h_s = 2r_s$. This remains true for any sphere.

In the case of the napkin ring, its height will be less than the height of the original sphere so that $h_b < 2r_s$. 
(note that we used the subscript "b" for simplicity. "b" also stands for "bead" which is another object with the same shape)

Let's take a look at the napkin ring.
![](Pasted%20image%2020260731175151.png)
Before continuing, let us clearly define our current variables:

$$
r_{s}= \text{Radius of the sphere}, 
$$
$$
r_{c} = \text{Radius of the cylinder},
$$
$$
h_{b}=\text{Height of napkin ring}  
$$

## How do we find the volume of the napkin ring?

You might be tempted to try subtracting the volume of the cylinder from that of the sphere to get the volume of the bead.  Although it sounds logical and it is a good try, you must remember that the cylindrical hole does not describe *exactly* the shape of the material removed but rather the path of the hole.
If we observe the napkin ring closely, we can see that the volume removed is not really a standard cylinder. It is more like a cylinder with two domes.

We will be using the tools that **calculus** provides to us. **Integrating** by means of the **washer method** will help us derive a **formula** that describes the **volume** of the napkin ring.

## How does the washer method work?
The washer method works conceptually by subtracting the area of a smaller circle with radius $r_i$ from the area of a bigger circle of radius $r_o$. Then we multiply by its thickness $h_{w}$.
![](Pasted%20image%2020260731175203.png)

 The washer method is a perfect match for this scenario because it uses an inner radius $r_i$ and an outer radius $r_o$. 
 ![](Pasted%20image%2020260731192840.png)

Volume of a washer
$$
V_{w}= (\pi r_{o}^2-\pi r_{i}^2) \cdot h_{w}
$$

$$
 V_{w} = \boxed{(\pi(r_{o}^2 - r_{i}^2)) \cdot h_{w}}
$$

The idea is to create a series of washers whose inner and outer radii match the cross-section of the napkin ring at each height. Then, we will calculate the volume of each individual washer and add them up.

The next example uses a sphere to visually show how it works.
![](Pasted%20image%2020260731175231.png)
By using only a few thick washers, we are able to have a rough approximation of the sphere. Because the washers don't follow closely the sphere's curved boundary, some regions are missed while others extend out of the sphere.

Check out what happens as we decrease the thickness more and more.
![](Pasted%20image%2020260731181513.png)
As the washers become thinner and more numerous, the sum of their volumes approaches the exact volume of the sphere.
$$
V_{s} = \lim_{ h_{w} \to 0 } \sum V_{w}
$$
We will use this same logic to find the volume of the bead.
## Using the washer method to derive the volume formula.

- Let $r_{s}$ be the radius of a *parent* sphere and $r_{c}$ the radius of the drilled hole.
- Place the parent sphere at the origin (0,0,0), with the cylindrical hole centered along the $z$-axis.
- Treat the $z$-axis as vertical, so the washers are perpendicular to it.


This is the formula for the washer method:

$$
V = \pi \int_{a}^b(r_{o}^2-r_{i}^2)dz
$$



We know the formula, but we do not yet know how to express $r_{o}$​ and $r_{i}$​ using the geometry of our bead.


Let us begin by drawing a cross-section of the napkin ring in the $xz$-plane:
![](Pasted%20image%2020260816164408.png)

In our cross-section we can see the geometry of our ring. Our inner radius is defined as the distance from the $z$-axis ($x=0$) to the inner *cylinder*. Then, the outer radius will be the distance from the $z$-axis to the surface of the *sphere*.


![](Pasted%20image%2020260815181011.png)

The inner radius $r_{i}$ remains constant as we move up or down the $z$-axis given that $r_{i}=r_{c}$. By contrast, the length of the outer radius $r_{o}$ changes as we move along the $z$-axis, and it is **not** the same as the sphere radius $r_{s}$.

We first need to determine how $r_{o}$ depends on the height $z$ and the sphere radius $r_{s}$. 

### Writing $r_o$ in terms of $z$ and $r_s$
Let us place $r_{o}$ at some height $z$ forming a right triangle whose hypotenuse is $r_{s}$
![](Pasted%20image%2020260815213532.png)
According to the Pythagorean theorem:
$$
r_{s}^2 = r_{o}^2 +z^2
$$
Subtract $z^2$ from both sides:
$$
r_{s}^2-z^2=r_{o}^2+\cancel{z^2}-\cancel{z^2}
$$
so
$$
r_{o}^2 = \boxed{r_{s}^2-z^2}
$$
### Writing $r_i$ in terms of height $h_b$ and $r_s$

Look at the point where the cylindrical hole meets the sphere at the top edge of the napkin ring. This forms a right triangle.
![](Pasted%20image%2020260815220739.png)
$$
r_{s}^2 = (\frac{h_{b}}{2})^2+r_{i}^2
$$
Solving for $r_{i}^2$ 
$$
r_{s}^2-(\frac{h_{b}}{2})^2 = r_{i}^2 + \cancel{(\frac{h_{b}}{2})^2} -  \cancel{(\frac{h_{b}}{2})^2}
$$
so
$$
r_{i}^2 = \boxed{r_{s}^2-(\frac{h_{b}}{2})^2}
$$
Since $r_{i}=r_{c}$, this equation also relates the radius of the drilled cylinder to the sphere radius $r_{s}$ and half the bead's height, $\frac{h_{b}}{2}$.
### Putting it all together
Now we have all the necessary pieces. Let us collect them:
$$
r_{i}^2 = r_{s}^2-(\frac{h_{b}}{2})^2 , \qquad r_{o}^2 =r_{s}^2-z^2
$$
$$
V_{b} = \pi \int_{-\frac{h_{b}}{2}}^{\frac {h_{b}}{2}}(r_{o}^2-r_{i}^2)dz
$$
Given that the bead is symmetric about $z=0$, we can change our bounds so we only integrate the upper *half* of the volume and multiply by 2.
$$
V_{b} = 2\pi \int_{0}^{\frac{h_{b}}{2}}(r_{o}^2-r_{i}^2)dz 
$$
Replacing $r_{i}^2$ and $r_{o}^2$ 

$$
V_{b} = 2\pi \int_{0}^{\frac{h_{b}}{2}}\left[(r_{s}^2-z^2)-(r_{s}^2-(\frac{h_{b}}{2} )^2)\right]dz 
$$
Distribute the signs
$$
V_{b} = 2\pi \int_{0}^{\frac{h_{b}}{2}}\left[r_{s}^2-z^2-r_{s}^2+(\frac{h_{b}}{2} )^2\right]dz 
$$
Here is where it happens!
There now is a positive and a negative $r_{s}^2$, so they cancel. This is the crucial step: the original sphere radius **disappears** entirely from the integral.
$$
V_{b} = 2\pi \int_{0}^{\frac{h_{b}}{2}}\left[\cancel{r_{s}^2}-z^2\cancel{-r_{s}^2}+(\frac{h_{b}}{2} )^2\right]dz 
$$

$$
V_{b} = 2\pi \int_{0}^{\frac{h_{b}}{2}}\left[-z^2+(\frac{h_{b}}{2} )^2\right]dz 
$$
Rearrange and simplify the height term
$$
V_{b} = 2\pi \int_{0}^{\frac{h_{b}}{2}}
\left[\frac{h_{b}^2}{4} -z^2\right]dz 
$$

Integrate
$$
V_{b}= 2\pi \left[ \frac{zh_{b}^2}{4}- \frac{z^3}{3} \right]_{0}^{\frac{h_{b}}{2}} =
2\pi \left[ z \cdot \frac{h_{b}^2}{4}- z^3 \cdot\frac{1}{3} \right]_{0}^{\frac{h_{b}}{2}}
$$
Evaluate and simplify
$$
V_{b}= 
2\pi \left[ (\frac{h_{b}}{2}) \cdot \frac{h_{b}^2}{4}- (\frac{h_{b}}{2})^3 \cdot\frac{1}{3} \right] =
2\pi \left[\frac{h_{b}^3}{8}- \frac{h_{b}^3}{8} \cdot\frac{1}{3} \right] 
$$
$$
V_{b}= 2\pi \left[\frac{h_{b}^3}{8}- \frac{h_{b}^3}{24} \right]
$$

Match denominators and subtract
$$
V_{b}=
2\pi \left[\frac{3h_{b}^3}{24}- \frac{h_{b}^3}{24} \right] = 
2\pi \left[\frac{2h_{b}^3}{24}\right]
$$
Simplify
$$
V_{b}= 
\frac{4\pi h_{b}^3}{24} 

$$
$$
V_{b} = \boxed{\frac{\pi h_{b}^3}{6}}
$$

The radius $r_{s}$ of the original sphere has vanished completely. No matter how large or small the parent sphere is, **two napkin rings with the same height must have the same volume**.











