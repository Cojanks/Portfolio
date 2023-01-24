# Item List Component

A filterable tag-based list component.

## Product design & thinking for this site

My initial thought was to make this into a table but in reality, this was simply a list with additional details .

The biggest obstacle was how to filter `(X num of items)` which have `(X num of Tags)` by `(X num of active / filtering tags)` This could have easily gotten to `O(n^2)` or above. So I decided that the component creates a few number of static directories (`O(n)` for this operation) to use to lookup.

### Future features:

(In progress)

### Opportunities for improvement:

(In progress)
