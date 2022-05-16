from rest_framework import routers
from .views import StudentViewSet


router = routers.SimpleRouter()
router.register("student", StudentViewSet)


urlpatterns = router.urls
