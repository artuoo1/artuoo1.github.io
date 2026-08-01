---

---
You have surely seen a napkin ring before. It might've been at a party, wedding, or fancy restaurant. 
![374](Pasted%20image%2020260731175118.png)


A napkin ring is formed by drilling a cylindrical hole through the center of a sphere. 

The interesting thing happens when we try to find an equation describing the volume of such a simple shape. 
The napkin ring theorem shows that if we drill a cylindrical hole through the center of any sphere with some radius $r_{s}$, the volume of the resultant shape will depend only on its height regardless of the magnitude of $r_{s}$. 

$$
V_{b}= \boxed{\frac{\pi h_{b}^3}{6}}
$$


For example; imagine we have two spheres. One has a radius $r_{s,1}$  and the other $r_{s,2}$ where $r_{s,1} = 10r_{s,2}$ . If we drill appropriately sized cylindrical holes on both in such a way that the resultant pair of bands have the same height, they would have the exact same volume.

Conceptually, we can understand the cylinder to be something like a cookie cutter instead of a hole. This allows us to inspect more closely the interaction between the sphere and the cylinder.

![](Pasted%20image%2020260731175133.png)
The sphere has some radius $r_s$, which means that the distance from the origin to some point $P$ in the surface of the sphere will always be the radius $r_s$. Moreover, the distance from the origin to the north pole is also $r_s$, which gives us that the total height of a sphere is $h_s = 2r_s$. This remains true for any sphere.

In the case of the napkin ring, its height will be less than the height of the original sphere so that $h_b < 2r_s$. 
(note that we used the subscript "b" for simplicity. "b" also stands for "bead" which is another object with the same shape)

Let's take a look at the napkin ring.
![](Pasted%20image%2020260731175151.png)
Before continuing, let us clearly define our current variables:

$$r_{s}= \text{Radius of the sphere}, \qquad r_{c} = \text{Radius of the cylinder}  $$
$$h_{b}=\text{Height of napkin ring}$$
## How do we find the volume of the napkin ring?

You might be tempted to try subtracting the volume of the cylinder from that of the sphere to get the volume of the bead.  Although it sounds logical and it is a good try, you must remember that the cookie cutter is not really the volume that we remove from the sphere but rather just the tool used.
If we observe the napkin ring closely, we can see that the volume removed is not really a standard cylinder. It is more like a cylinder with two domes.

We will be using the tools that **calculus** provides to us. **Integrating** by means of the **washer method** will help us derive a **formula** that describes the **volume** of the napkin ring.

## How does the washer method works?
The washer method works conceptually by subtracting the area of a smaller circle with radius $r_i$ from the area of a bigger circle of radius $r_o$. Then we multiply by its thickness $h_{w}$
![](Pasted%20image%2020260731175203.png)

 The washer method is a perfect match for this scenario because it uses an inner radius $r_i$ and an outer radius $r_o$. 
 ![](Pasted%20image%2020260731192840.png)
To calculate the volume of a washer, we subtract the area of the inner circle from the area of the outer circle:

$$ A_{w}= \pi r_{o}^2 - \pi r_{i}^2 = \boxed{ \pi(r_{o}^2 - r_{i}^2)}$$
Then we just need to multiply by its thickness:
$$$$

$$
V_{w} \approx (\pi(r_{o}^2 - r_{i}^2)) \cdot h_{w}

$$

The idea is to create a series of washers whose inner and outer radii match the cross-section of the napkin ring at each height. The number of washers used depends on the thickness $h_{w}$. Then, we will calculate the volume of each individual washer and add them up.

The following example uses a sphere to show how the washer method works conceptually.
![](Pasted%20image%2020260731175231.png)
By using only a few thick washers, we are able to have a rough approximation of the sphere. Because the washers don't follow closely the sphere's curved boundary, some regions are missed while others extend out of the sphere.
Check out what happens as we decrease the thickness more and more.
![](Pasted%20image%2020260731181513.png)
As the washers become thinner, they follow more precisely the curved boundary, so the total washer volume approaches the sphere's actual volume. Therefore, as $h_{w}$  approaches zero our approximation becomes more accurate.
## Using the washer method to derive the volume formula.
The following section is more mathematical, but it follows from the concepts that we previously explained. Although it might be a bit more confusing, follow along to see how the *magic* happens.

Let $r_{s}$ be the radius of a *parent* sphere and $r_{c}$ the radius of the drilled hole.
Place the napkin ring  in a three-dimensional coordinate space, with its center at the origin (0,0,0).
The $z$-axis passes vertically through the drilled hole.
The cylinder and sphere are centered around the $z$-axis.
Horizontal washers are perpendicular to the $z$-axis.
The $z$-axis will be chosen as the *vertical axis*. 

Let us begin by drawing a cross-section of the napkin ring in the $z x$-plane:








