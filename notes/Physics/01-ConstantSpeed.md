---
title: "Chapter 1: Displacement and Velocity"
---

# Displacement and Velocity

Displacement is the amount of distance an object traveled. This can be computed by final position minus the initial position where position is r vector with x and y components for 2D and x, y, and z components for 3D

$$ \vec{\Delta r} = \vec{r}_f - \vec{r}_i $$

Velocity is the amount of time it takes to travel a certain distance. Velocity is a vector which means it has a direction. A negative velocity does not mean it is slowing down, it means that it is moving in the opposite direction. The equation for velocity is the distance traveled divided by the time it takes

 $$ \vec{v} = \frac{\vec{\Delta r}}{\Delta t} $$ or in smaller time intervals $$ \vec{v} = \frac{d\vec{r}}{dt} $$

Since velocity is a vector we can also split it into components. An example of this is in 2D objects where we can split the object in x and y components.
Based on the equation of speed we can also derive the equation for the displacement of the object. On the following equations let Δr be a vector displacement while Δx and Δy be displacement in their respective axis

$$ \vec{\Delta r} = \vec{v}_r \Delta t \quad \Rightarrow \quad \vec{r}_f - \vec{r}_i = \vec{v} \Delta t $$

$$ \Delta x = v_x \Delta t \quad \Rightarrow \quad x_f - x_i = v_x \Delta t $$

$$ \Delta y = v_y \Delta t \quad \Rightarrow \quad y_f - y_i = v_y \Delta t $$

Note that this formula is only applicable when our velocity is constant. Formula for position with non-constant speed can be found with integration

<iframe src="https://editor.p5js.org/Nikko-Adrian-Pacleb/full/FeSWgmp3B" width="620" height="450"></iframe>

<iframe src="https://smacs-mtsac.github.io/smacs-visuals/Physics-Visuals/Constant-Speed-p5/index.html" width="400" height="400">